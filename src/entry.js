import React from 'react';
import ReactDOM from 'react-dom';
import MenuComponent from './js/components/menu/MenuComponent';
import AnswerMultipleChoiceQuestion from './js/components/form/SubComponent/AnswerMultipleChoiceQuestion';
import Logo from './js/components/logo/Logo';
import FormComponent from './js/components/form/FormComponent';
import LoginSns from './js/components/loginsns/LoginSns';
import MyForm from './js/components/form/SubComponent/Test';
import NavUser from './js/components/nav-user/NavUser';
import navgation from './js/data/navgation.js';

ReactDOM.render(<MenuComponent navs={navgation} />, document.getElementById('container'));
ReactDOM.render(<Logo />, document.getElementById('logo'));
ReactDOM.render(<FormComponent />, document.getElementById('sign-in'));
ReactDOM.render(<NavUser />, document.getElementById('nav-user'));
ReactDOM.render(<LoginSns />, document.getElementById('login-sns'));
