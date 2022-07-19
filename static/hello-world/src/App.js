import React, {Fragment, useEffect, useState} from "react";
import { view } from "@forge/bridge";
import { Router, Route, Routes } from "react-router";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Form01 from "./components/formularios/Form01";

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
                <div>
                    <Router
                    navigator={history}
                    navigationType={historyState.action}
                    location={historyState.location}
                >
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="/form" element={<Form01 />}></Route>
                        </Routes>
                    </Router>
                </div>
            ) : (
                "Loading..."
            )}
        </div>
    );
}

export default App;
