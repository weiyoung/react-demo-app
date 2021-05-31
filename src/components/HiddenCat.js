import { useState } from "react";

export default function HiddenCat() {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div>
            <button onClick={() => setIsVisible(isVisible ? false : true)}>
                Show/Hide Cat
            </button>
            <br />
            <br />
            {isVisible && (
                <div>
                    <img src="https://bit.ly/3wGyZoV" alt="cat" width="60%" />
                </div>
            )}
        </div>
    );
}
