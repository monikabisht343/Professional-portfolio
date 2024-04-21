import React from 'react';

function Features() {
    return (
        <section id="features" className="py-10 bg-white">
            <div className="container">
                {/* Remaining content */}
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-6">Our Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        <div className="p-4 bg-gray-100 rounded shadow">
                            <h4 className="text-xl font-bold mb-2">App Development</h4>
                            <p>Turn your ideas into reality with our custom app development services. From conceptualization to design and deployment, our expert team will guide you through every step of the process. Whether it's iOS, Android, or cross-platform development, we've got you covered.</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded shadow w-full">
                            <h4 className="text-xl font-bold mb-2">Web Design</h4>
                            <p>Capture your audience's attention with stunning and responsive web designs. Our team of experienced designers will work closely with you to create visually appealing and user-friendly websites that reflect your brand identity and drive engagement.</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded shadow w-full">
                            <h4 className="text-xl font-bold mb-2">IT Services</h4>
                            <p>Streamline your operations and enhance your productivity with our comprehensive IT services. From network setup and security to software implementation and support, we provide end-to-end solutions tailored to meet your business needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
