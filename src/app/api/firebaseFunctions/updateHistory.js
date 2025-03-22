import { db } from '@/services/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  const { vehicleId, status } = req.body;
  await setDoc(doc(db, "historiques", vehicleId), { status, updatedAt: new Date() });

  res.status(200).json({ message: 'History updated successfully' });
}