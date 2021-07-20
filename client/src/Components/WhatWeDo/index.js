import React, { Component } from 'react';
import integrate from '../../Images/integrate.svg';
import testimonial from '../../Images/testimonials.svg';
import doctor from '../../Images/doctors.svg';
import Card from './Card';
import './Card.css';

class CardLayout extends Component {
	render() {
		const data = [
			{
				image: integrate,
				title: 'Integrate Solutions',
				description:
					'A platform for patients to share health information. Here people like you have the chance to share both personal experience and health data about their ailments, in order to contribute to the discovery of new knowledge and amazing ideas.',
			},
			{
				image: testimonial,
				title: 'Collect Testimonials',
				description:
					'You can put your sickness experiences in context and discover answers to your queries by sharing information on our site. You can know everything there is to know about treatment of patients like you, and what worked best for them. Also, you can connect with patients who have similar conditions, symptoms or therapies.',
			},
			{
				image: doctor,
				title: 'Good Doctors/Clinics',
				description:
					'It helps in collaborating with doctors, researchers, and medical practitioners to increase your understanding of disease and speed up the creation of new treatments. It aims at information sharing that will make a difference in the lives of people like you and improve healthcare, one which puts patients back in the drivers seat.',
			},
		];

		const _html = [...data].map((x, key) => {
			return <Card key={key} image={x.image} title={x.title} description={x.description} />;
		});

		return (
			<div>
				<div className="bg-white mt-5 container">
					<div className="row">
						<div className="col-xs-12 col-md-12 col-sm-12 col-xs-12 mt-5">{_html}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardLayout;
