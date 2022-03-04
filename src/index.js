import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";

import Firebase, { FirebaseContext } from "./contexts/firebase/";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog/blog";
import Header from "./components/header/headerComponent";
import BlogPost from "./components/blogPost/blogPost";

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/portfolio" element={<App />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </FirebaseContext.Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
