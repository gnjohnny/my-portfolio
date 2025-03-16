import { services } from '../utils/services';

const Services = () => {
    return (
        <div className="services" id="services">
            <h1 className="services_head head_reveal">Service.</h1>

            <div className="service_container">
                {services.map((service, idx) => (
                    <div className="service_content auto_display" key={idx}>
                        <service.icon
                            size={28}
                            className="text-white font-bold"
                        />
                        <h1 className="service_content_head">
                            {service.title}
                        </h1>
                        <p className="service_content_text fade-in-right">
                            {service.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
