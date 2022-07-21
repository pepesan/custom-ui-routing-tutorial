import React, {Fragment, useEffect, useState} from "react";
import { view } from "@forge/bridge";
import { Router, Route, Routes } from "react-router";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Form01 from "./components/pages/formularios/Form01";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form02 from "./components/pages/formularios/Form02";
import FormFormik from "./components/pages/formularios/FormFormik";
import ApiCaller from "./components/pages/api/ApiCaller";
import CargaDatos from "./components/pages/httprequest/CargaDatos";

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
                            <Route path="/form2" element={<Form02 />}></Route>
                            <Route path="/formik" element={<FormFormik />}></Route>
                            <Route path="/api" element={<ApiCaller />}></Route>
                            <Route path="/api-externo" element={<CargaDatos />}></Route>
                            CargaDatos
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
