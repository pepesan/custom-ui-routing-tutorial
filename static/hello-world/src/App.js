import React, { useEffect, useState } from "react";
import { view } from "@forge/bridge";
import { Router, Route, Routes, useNavigate } from "react-router";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
    const [history, setHistory] = useState(null);

    useEffect(() => {
        view.createHistory().then((newHistory) => {
            setHistory(newHistory);
        });
    }, []);

    const [historyState, setHistoryState] = useState(null);

    useEffect(() => {
        if (!historyState && history) {
            setHistoryState({
                action: history.action,
                location: history.location,
            });
        }
    }, [history, historyState]);

    useEffect(() => {
        if (history) {
            history.listen((location, action) => {
                setHistoryState({
                    action,
                    location,
                });
            });
        }
    }, [history]);

    return (
        <div>
            {history && historyState ? (
                <Router
                    navigator={history}
                    navigationType={historyState.action}
                    location={historyState.location}
                >
                    <Routes>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </Router>
            ) : (
                "Loading..."
            )}
        </div>
    );
}

export default App;
