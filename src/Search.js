import React from 'react';


class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inputKeyword: '',
			inputLocation: '',
			validLocation: 'blank'
		};

		this.handleKeywordChange = this.handleKeywordChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleKeywordChange(event) {
		this.setState({
			inputKeyword: event.target.value
		});
	}

	handleLocationChange(event) {
		this.setState({
			inputLocation: event.target.value,
			validLocation:true
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.inputLocation !== '') {
			this.setState({
				validLocation: true
			});
			const inputKeywordQuery = this.state.inputKeyword;
			const inputLocationQuery = this.state.inputLocation;
			this.props.receiver(inputKeywordQuery, inputLocationQuery);
		} else {
			this.setState({
				validLocation: false
			});
		}
	}

	render() {
		return (
			<div className='header'>
				<h1 className="logo">JustDontEat</h1>
				<form 
					className='search-form'
					onSubmit={this.handleSubmit}
				>

{/*=========================================*/}
					{/*Keyword search input*/}
{/*=========================================*/}
					<input 
						type="text" 
						placeholder='Search any food'
						onChange={this.handleKeywordChange}
						value={this.state.inputKeyword}
						id='search-input'
						className='search-input'
						name='search-input'
					/>

{/*=========================================*/}
					{/*Location search input*/}
{/*=========================================*/}
					<input 
						type="text" 
						placeholder='Type Location'
						onChange={this.handleLocationChange}
						value={this.state.inputLocation}
						id='search-input'
						className='search-input'
						name='search-input'
					/>

{/*=========================================*/}
	{/*Hidden error message for validation*/}
{/*=========================================*/}

					<p 

						className={this.state.validLocation !== false ? 'hidden' : 'validation-error'}
					>
						Location field can't be empty

					</p>
					<button className='submit-btn' type='submit'>►</button>
				</form>
			</div>
		);
	}
}


export default Search;