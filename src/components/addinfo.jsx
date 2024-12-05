/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import supabase from "./supabaseClient";
const fileToBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			resolve(reader.result.split(",")[1]);
		};
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
};
const Addinfo = () => {
	const [userLocation, setLocation] = useState("Fetching location...");
	const [isDisabled, setDisabled] = useState(false);

	const handleUserLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
					setDisabled(true);
				},
				(error) => {
					console.error("Error fetching location:", error);
					alert("Error fetching location", error);
					setLocation("Unable to fetch location");
				},
			);
		} else {
			setLocation("Geolocation not supported");
		}
	};

	const cancelRequest = () => {
		alert("Request has been cancelled. Redirecting to the home page");
		window.location.href = "/";
	};
	const handleSubmit = async () => {
		const text = document.querySelector("input[type='text']").value;
		const range = document.querySelector("input[type='range']").value;
		const uslocation = `${userLocation}`;

		const { data: user, error } = await supabase.auth.getUser();
		if (error) {
			console.error("Error fetching user:", error);
			return;
		}

		if (user) {
			console.log(`User: ${user.user}`);
			const { error: insertError } = await supabase
				.from("databse") // Ensure the table name is correct
				.insert([
					{
						user_id: user.id,
						report: text,
						severity: range,
						location: uslocation,
						date: new Date().toISOString(),
					},
				]);

			if (insertError) {
				console.error("Error inserting data:", insertError);
				alert("There was an error submitting your response. Please try again.");
			} else {
				alert("Your response has been recorded. Thank you for your feedback!");
				window.location.href = "/";
			}
		}
	};

	const location = useLocation();
	const imageFile = location.state?.imageFile;
	const previewUrl = URL.createObjectURL(imageFile);
	return (
		<div className="grid grid-flow-dense">
			<div className="relative h-64 overflow-auto">
				<img
					src={previewUrl}
					alt="Preview"
					className="h-auto mx-auto mt-16 border-8 border-white rounded-lg w-52"
				/>
			</div>
			<input
				type="text"
				placeholder="Type here"
				className="w-full max-w-xs mx-auto mt-10 input input-bordered input-primary"
			/>
			<input
				type="text"
				placeholder="Type"
				className="w-full max-w-xs mx-auto mt-5 input input-bordered input-primary "
				value={userLocation}
				onClick={handleUserLocation}
				disabled={isDisabled}
			/>
			<div className="w-full max-w-xs mx-auto mt-5">
				<input
					type="range"
					min={0}
					max="100"
					defaultValue="0"
					className="range [--range-shdw:yellow] range-xs w-full"
					step="50"
				/>
				<div className="flex justify-between w-full px-2 text-sm">
					<span>🥱</span>
					<span>🔥</span>
					<span>⚠️</span>
				</div>
				<div className="fixed bottom-0 left-0 flex justify-around w-full p-4 ">
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						className="flex-1 mx-2 btn btn-accent contrast-150"
						onClick={handleSubmit}
					>
						Submit 🪄
					</button>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						className="flex-1 mx-2 btn btn-secondary"
						onClick={cancelRequest}
					>
						Cancel ❌
					</button>
				</div>
			</div>
		</div>
	);
};

export default Addinfo;
