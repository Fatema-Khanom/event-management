

const Bannar = () => {
    return (
        <div className="w-11/12 m-auto my-10">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/gZXsdQP/download.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Where Dreams Come to Life</h1>
                <p className="mb-5">Whether you're envisioning a romantic wedding, a corporate gathering, a milestone celebration, or any special occasion, we're here to bring your dreams to life. From concept to execution, our dedicated team works tirelessly to ensure every element of your event aligns with your vision.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Bannar;