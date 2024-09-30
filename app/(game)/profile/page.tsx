"use client";
import SignOutButton from "@/components/signOutButton";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserData } from "@/services/firestoreService";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore"; // To store the image URL
import { app } from "@/firebase/firebaseConfig"; // Your Firebase config
import { getFirestore } from "firebase/firestore";
import Navbar from "@/components/navbar"; // Navbar is imported

const ProfilePage = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>("");

  const db = getFirestore(app);
  const storage = getStorage(app);

  // Fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const data = await getUserData(user.uid);
        setUserData(data);
        if (data?.profileImageUrl) {
          setImageUrl(data.profileImageUrl); // Set image URL if it exists
        }
      }
    };
    fetchUserData();
  }, [user]);

  // Handle image change when user selects a file
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]); // Set the selected file
    }
  };

  // Handle the upload of the profile image
  const handleUpload = async () => {
    if (!profileImage || !user) return; // Make sure an image is selected and user exists

    const storageRef = ref(storage, `profileImages/${user.uid}`);
    await uploadBytes(storageRef, profileImage); // Upload the file

    // Get the download URL from Firebase Storage
    const downloadURL = await getDownloadURL(storageRef);

    // Store the download URL in Firestore under the user's document
    await setDoc(doc(db, "users", user.uid), { profileImageUrl: downloadURL }, { merge: true });

    // Update the state to show the new profile image
    setImageUrl(downloadURL);
  };

  return (
    <>
      <Navbar /> {/* Include Navbar here */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Profile</h2>
        {user ? (
          <>
            <p className="mb-4">Logged in as: {user.email}</p>

            {userData ? (
              <div className="mb-4">
                <p>Username: {userData.username}</p>
                <p>UserID: {userData.uid}</p>
                <p>Email: {userData.email}</p>
                <p>Coins: {userData.coins}</p>
                {/* Profile Image */}
                {imageUrl ? (
                  <img src={imageUrl} alt="Profile" width={150} height={150} className="rounded-full" />
                ) : (
                  <p>No profile photo</p>
                )}
                {/* Image Upload Section */}
                <div>
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                  <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                    Upload Photo
                  </button>
                </div>
              </div>
            ) : (
              <p>Loading user data...</p>
            )}

            <SignOutButton />
          </>
        ) : (
          <>
            <p>You are not logged in.</p>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign up</Link>
          </>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
