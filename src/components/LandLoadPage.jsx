import React from 'react';
import ElectricBorder from './ElectricBorder';

export default function LandLoadPage() {
    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <ElectricBorder
                color="#E32020"
                speed={1}
                chaos={0.8}
                thickness={1.2}
                style={{ borderRadius: 24 }}
            >
                <div className="flex items-center justify-center p-8">
                    <img
                        src="./assets/z.png"
                        alt="Logo"
                        className="w-48 h-48 object-contain"
                    />
                </div>
            </ElectricBorder>
        </div>
    );
}
