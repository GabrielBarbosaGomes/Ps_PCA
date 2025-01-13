import "./styles.scss";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

export function Header() {
    return (
        <div className='wrapper'>
            <MenuIcon/>
            <input type='text' className="search"></input>
            <div className="wrapperUser">
                <PersonIcon/>
            </div>
        </div>
    )
}