import React, { Component } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mediaMin } from '@divyanshu013/media';

import Dejavu from './components/Dejavu';
import Importer from './components/Importer';
import SearchPreview from './components/SearchPreview';
// import Mappings from './components/Mappings';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatch';
import QueryExplorer from './components/QueryExplorer';

import configureStore from './store';
import {
	getUrlParams,
	getLocalStorageItem,
	setLocalStorageData,
} from './utils';
import { LOCAL_CONNECTIONS } from './constants';

import logo from './images/dejavu-logo.svg';

const { Content, Sider } = Layout;
const store = configureStore();

class App extends Component {
	state = {
		isShowingSideBar: true,
	};

	componentDidMount() {
		const { sidebar } = getUrlParams(window.location.search);

		if (sidebar && sidebar === 'false') {
			this.setSideBarVisibility(false);
		}

		const localConnections = getLocalStorageItem(LOCAL_CONNECTIONS);

		if (!localConnections) {
			setLocalStorageData(
				LOCAL_CONNECTIONS,
				JSON.stringify({
					pastApps: [],
				}),
			);
		}
	}

	setSideBarVisibility = isShowingSideBar => {
		this.setState({
			isShowingSideBar,
		});
	};

	render() {
		const { isShowingSideBar } = this.state;
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Layout
						css={{ minHeight: isShowingSideBar ? '100vh' : 'auto' }}
					>
						{isShowingSideBar && (
							<Sider
								theme="light"
								css={{
									display: 'none',
									[mediaMin.medium]: {
										display: 'block',
									},
								}}
							>
								<img
									src={logo}
									alt="Dejavu"
									width="100%"
									css={{ padding: 25 }}
								/>
								<Navigation />
							</Sider>
						)}
						<Layout>
							<Content
								css={{
									margin: isShowingSideBar ? 25 : 0,
									height: '100%',
								}}
							>
								<div
									css={{
										padding: 20,
										background: '#fff',
									}}
								>
									<Switch>
										<Route
											exact
											path="/"
											component={Dejavu}
										/>
										<Route
											path="/import"
											component={Importer}
										/>
										<Route
											path="/preview"
											component={SearchPreview}
										/>
										{/* <Route
											path="/mappings"
											component={Mappings}
										/> */}
										<Route
											path="/query"
											component={QueryExplorer}
										/>
										<Route
											path="/404"
											component={NoMatch}
										/>
										<Route component={NoMatch} />
									</Switch>
								</div>
							</Content>
						</Layout>
					</Layout>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
