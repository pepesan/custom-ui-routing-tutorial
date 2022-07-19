import React, { Fragment, useEffect, useState } from "react";
import { view } from "@forge/bridge";
import { Router, Route, Routes, useNavigate } from "react-router";

function Link({ to, children }) {
    const navigate = useNavigate();
    return (
        <a
            href={to}
            onClick={(event) => {
                event.preventDefault();
                navigate(to);
            }}
        >
            {children}
        </a>
    );
}

function Home() {
    return (
        <Fragment>
            <h2>Home</h2>
            <Link to="/page-with-path">Route to page with path</Link>
        </Fragment>
    );
}

function PageWithPath() {
    return <h2>Page with path</h2>;
}

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
                        <Route path="/page-with-path" element={<PageWithPath />}></Route>
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
