import React from 'react';
import Page from './components/page';


class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = ({
			entries: null,
		})
	}

	componentWillMount() {
		const contentful = require('contentful');
		const client = contentful.createClient({
			space: 'qcxow5uej8fm',
			accessToken: '693c142e47247234a0c41804d83ca45c1d3ccf17523379f08c3801f015dd735f'
		});
		client.getEntries()
			.then(response => {
				if (response.fields) {
					this.response.fields.map((fields, i) => <pre key={i}>{fields}</pre>);
					this.setState({
						entries: response.items})}
			}).catch(console.error);

	}

	render() {
		return <Page entries={this.state.entries}/>

	}
}

export default Main;
