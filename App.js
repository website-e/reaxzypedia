
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'https://sprintpedia.id/api/';
const API_KEY = '94fef3-846c23-42db56-22b58e-cd1c68';
const SECRET_KEY = 'L0lnMG5IMUNGR05SWE5TMnF0RFgrQT09';

const axiosInstance = axios.create({
  baseURL: API_BASE,
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
});

const Reaxzy25Pedia = () => {
  const [profile, setProfile] = useState(null);
  const [services, setServices] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    service: '',
    target: '',
    quantity: ''
  });

  const fetchProfile = async () => {
    const res = await axiosInstance.post('profile', {
      key: API_KEY,
      secret: SECRET_KEY
    });
    setProfile(res.data.data);
  };

  const fetchServices = async () => {
    const res = await axiosInstance.post('services', {
      key: API_KEY,
      secret: SECRET_KEY
    });
    setServices(res.data.data);
  };

  const orderService = async () => {
    const res = await axiosInstance.post('order', {
      key: API_KEY,
      secret: SECRET_KEY,
      service: formData.service,
      target: formData.target,
      quantity: formData.quantity
    });
    alert(JSON.stringify(res.data));
  };

  const checkStatus = async () => {
    const res = await axiosInstance.post('status', {
      key: API_KEY,
      secret: SECRET_KEY,
      order_id: orderId
    });
    setOrderStatus(JSON.stringify(res.data));
  };

  useEffect(() => {
    fetchProfile();
    fetchServices();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Reaxzy25Pedia</h1>

      {profile && (
        <div className="bg-white shadow rounded p-4 mb-6">
          <h2 className="text-xl font-semibold">Profil</h2>
          <p>Username: {profile.username}</p>
          <p>Saldo: Rp{profile.balance}</p>
        </div>
      )}

      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Form Pemesanan</h2>
        <select className="border p-2 mb-2 w-full" onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
          <option value="">Pilih Layanan</option>
          {services.map(service => (
            <option key={service.service} value={service.service}>
              {service.name} - Rp{service.price}
            </option>
          ))}
        </select>
        <input className="border p-2 mb-2 w-full" placeholder="Target" onChange={(e) => setFormData({ ...formData, target: e.target.value })} />
        <input className="border p-2 mb-2 w-full" placeholder="Jumlah" type="number" onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />
        <button onClick={orderService} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Pesan Sekarang</button>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Cek Status Pemesanan</h2>
        <input className="border p-2 mb-2 w-full" placeholder="Masukkan Order ID" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        <button onClick={checkStatus} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Cek Status</button>
        {orderStatus && <pre className="bg-gray-100 p-2 mt-2">{orderStatus}</pre>}
      </div>
    </div>
  );
};

export default Reaxzy25Pedia;
