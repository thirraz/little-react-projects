import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { Navbar } from "./components/Navbar";
import { Consulting } from "./components/pages/Consulting";
import { ContactUs } from "./components/pages/ContactUs";
import { Marketing } from "./components/pages/Marketing";
import { Products } from "./components/pages/Products";
import { Services } from "./components/pages/Services";
import { SignUp } from "./components/pages/SignUp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/services" element={<Services />} />
				<Route path="/products" element={<Products />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/consulting" element={<Consulting />} />
				<Route path="/marketing" element={<Marketing />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
