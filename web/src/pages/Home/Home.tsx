import React from 'react';
import './Home.css'
// import '../../assets/styles/theme/StarryDark/StarryDark.css'
import '../../assets/styles/theme/DawnGolden/DawnGolden.css'
import YellowButton from '../../components/ColorButton/ColorButton'
import { Link, Redirect } from 'react-router-dom'
import { Icon } from 'antd'

const style1 = {
  width: '150px',
  height: '55px',
  fontSize: '25px',
  backgroundColor: '#fae379',
  color: 'white'
}

const style2 = {
  width: '150px',
  height: '55px',
  fontSize: '25px',
  backgroundColor: 'white',
  color: '#fae379'
}

let styleshow = { display: '' };
let stylenone = { display: 'none' };

function changeColor(props: string) {
  const div: HTMLDivElement = document.getElementById(props) as HTMLDivElement;
  div.style.color = div.style.color === '' ? 'white' : '';
}

function changeButton(name: string, color: string) {
  const button: HTMLButtonElement = document.getElementById(name) as HTMLButtonElement;
  button.style.backgroundColor = button.style.backgroundColor === '' ? color : '';
}
interface InState {
  styleuser: object;
  stylesignin: object
}
class Home extends React.Component<{}, InState> {
  constructor(props: any) {
    super(props);
    this.state = {
      styleuser: styleshow,
      stylesignin: stylenone
    }
  }

  signinButton() {
    if (this.state.styleuser === styleshow) {
      this.setState({
        styleuser: stylenone,
        stylesignin: styleshow
      })
    }
    else {
      this.setState({
        styleuser: styleshow,
        stylesignin: stylenone
      })
    }
  }

  render() {
    return (
      <div className='Main'>
        <div className='header'>
          <div className='canvas'>
            <span className='title'>Ethernal Intelligence</span>
          </div>
          <div className='userboard'>
            <div className='user' style={this.state.styleuser}>
              <div onClick={this.signinButton.bind(this)}>
                <YellowButton
                  content='Sign In'
                  style1={style1}
                  style2={style2}
                />
              </div>
              <Link to='/signup/' style={{ textDecoration: 'none' }}>
                <div className='MainMessage' id='signup' onMouseEnter={changeColor.bind(this, 'signup')} onMouseLeave={changeColor.bind(this, 'signup')}>Sign Up</div>
              </Link>
              <Link to='/more/' style={{ textDecoration: 'none' }}>
                <div className='MainMessage' id='showmore' onMouseEnter={changeColor.bind(this, 'showmore')} onMouseLeave={changeColor.bind(this, 'showmore')}>Show Me More</div>
              </Link>
            </div>
            <div className='signupboard' style={this.state.stylesignin}>
              <form className='content'>
                <span>Username</span>
                <div style={{ flexDirection: 'row',position:'relative' }}>
                <Icon type="fire" style={{color:'#fae379',left:'0.5vw', top:'3vh',position:'absolute'}}/>
                  <input></input>
                </div>
                <span>Password</span>
                <div style={{ flexDirection: 'row',position:'relative' }}>
                <Icon type="lock" style={{color:'#fae379',left:'0.5vw', top:'3vh',position:'absolute'}}/>
                  <input type='password'></input>
                </div>
                <button className='submit' id='submit' type='submit' onMouseEnter={changeButton.bind(this, 'submit', '#01c501')} onMouseOut={changeButton.bind(this, 'submit', '#01c501')}>Submit And Sign Up</button>
                <button className='reset' id='reset' type='reset' onClick={this.signinButton.bind(this)} onMouseEnter={changeButton.bind(this, 'reset', 'red')} onMouseOut={changeButton.bind(this, 'reset', 'red')}>Reset And Turn Back</button>
              </form>
              <div className='illustration' style={{display:'none'}}>
                <div className='forget'>If you forget your password, please click here</div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>

        </div>
      </div>
    );
  }
}

export default Home;
