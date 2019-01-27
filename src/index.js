import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Flight from './Flight';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<Header name1="Главная" name2="Авиабилеты" name3="Отели" name4="Авто" name5="Страховка"/>, document.getElementById('root_header'));
ReactDOM.render(<Sidebar name1="Аэрофлот" name2="Ural Airlines" name3="Air Astana" name4="Pegasus" name5="Manas Air"/>, document.getElementById('root_sidebar'));
ReactDOM.render(<Content title="Популярные рейсы" text="Выберите один из этих рейсов и получите скидку 10%"/>, document.getElementById('root_content'));
ReactDOM.render((<div className="row">
	<Flight src="Moscow.jpg" from="Bishkek" to="Moscow" number="AN 83953" date="10.02.2019" price="200"/>
	<Flight src="Astana.jpg" from="Bishkek" to="Astana" number="AD 88952" date="11.02.2019" price="230"/>
	<Flight src="Istanbul.jpg" from="Bishkek" to="Istanbul" number="AM 86782" date="11.02.2019" price="260"/>
</div>), document.getElementById('root_flight'))

ReactDOM.render(<Footer number="+7 095 676 905 568" email="bm@gmail.com"/>, document.getElementById('root_footer'));



serviceWorker.unregister();
