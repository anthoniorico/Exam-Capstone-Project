import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../backend/utils/dbConnect';
import Hospital from '../../../backend/models/Hospital';

dbConnect();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const hospitals = await Hospital.find({});
        res.status(200).json(hospitals);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
      
    case 'POST':
      try {
        // Optional: Add validation for the request body
        const { name, address, phone, email, services } = req.body;
        if (!name || !address || !phone || !email || !services) {
          return res.status(400).json({ error: 'All fields are required' });
        }

        const newHospital = new Hospital({ name, address, phone, email, services });
        const savedHospital = await newHospital.save();
        res.status(201).json(savedHospital);
      } catch (error) {
        console.error('Error saving hospital:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;