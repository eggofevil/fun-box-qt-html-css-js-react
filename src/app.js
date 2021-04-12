import React from 'react';
import Item from './item';

function App() {
  return (
    <main className="main__items items">
				<h2 className="main__title">Ты сегодня покормил кота?</h2>
        <Item active={1} type="с фуа-гра" quantity="10" present_quantity="" present_description="мышь в подарок" addition="" weight="0,5" slogan="Печень утки разварная с артишоками."/>
        <Item active={1} type="с рыбой" quantity="40" present_quantity="2" present_description="мыши в подарок" addition="" weight="2" slogan="Головы щучьи с чесноком да свежайшая сёмгушка."/>
        <Item active={0} type="с курой" quantity="100" present_quantity="5" present_description="мышей в подарок" addition="заказчик доволен" weight="5" slogan="Филе из цыплят с трюфелями в бульоне."/>
    </main>
  );
}

export default App;
