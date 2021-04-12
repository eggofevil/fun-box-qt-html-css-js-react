import React from 'react';

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actionStatus: 'default',
			defaultClassName: 'card'
		}
	}

	componentDidMount = () => {
	}
	/*
	componentDidMount = () => {
		let attributes = {
			className: 'card '
		};
		if (this.props.active) {
			attributes.className += 'active ' + this.state.actionStatus;
			attributes.onMouseEnter = this.handleMouseOver;
			attributes.onMouseLeave = this.handleMouseLeave;
			this.handleMouseOver = this.handleMouseOver.bind(this);
			this.handleMouseLeave = this.handleMouseLeave.bind(this);
		} else {
			attributes.className += ' disabled';
		}
		this.setState({attributes: attributes});
	}
	*/

	handleMouseOver = () => {
		this.setState({actionStatus: 'hovered'});
		console.log(this.state);
	}

	handleMouseLeave = () => {
		this.setState({actionStatus: 'default'});
		console.log(this.state);
	}

		/*
		this.state.sectionAttributes.className = this.state.defaultClassName;
		if (this.props.state === 'active') {
			this.state.sectionAttributes.className += ' default';
			this.state.sectionAttributes.onMouseEnter = this.handleMouseOver;
			this.state.sectionAttributes.onMouseLeave = this.handleMouseLeave;
			this.handleMouseOver = this.handleMouseOver.bind(this);
			this.handleMouseLeave = this.handleMouseLeave.bind(this);
		}
	}

	handleMouseOver = () => {
		this.setState({
			sectionAttributes: {
				className: this.state.defaultClassName + ' hovered',
				onMouseLeave: this.handleMouseLeave
			}
		});
	}

	handleMouseLeave = () => {
		this.setState({
			sectionAttributes: {
				className: this.state.defaultClassName + ' default',
				onMouseEnter: this.handleMouseOver
			}
		});
	}
	*/

	render() {
		return (
			<section {...this.state.attributes}>
			  <div className="card__border">
			    <div className="card__background"></div>
			    <div className="card__container container">
			      <div className="container__info">
			        <p className="container__description">Сказочное заморское яство</p>
			        <h3 className="container__title">Нямушка <span>{this.props.type}</span></h3>
			        <ul className="container__features features">
			          <li className="features__unit quantity"><span>{this.props.quantity}</span> порций</li>
			          <li className="features__unit present"><span>{this.props.present_quantity}</span> {this.props.present_description}</li>
			          <li className="features__unit addition">{this.props.addition}</li>
			        </ul>
			      </div>
			    </div>
			  </div>
			  <div className="card__weight weight">
			    <p>{this.props.weight}</p>
			    кг
			  </div>
			  <p className="card__slogan slogan-default">Чего сидишь? Порадуй котэ, <span className="slogan-default__button">купи</span><span className="slogan-default__point">.</span></p>
			  <p className="card__slogan slogan-selected display-none">{this.props.slogan}</p>
			  <p className="card__slogan slogan-disabled display-none">Печалька,  закончился.</p>
			</section>
		);
	};
}
export default Item;
