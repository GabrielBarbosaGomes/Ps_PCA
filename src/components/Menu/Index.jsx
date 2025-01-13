import "./styles.scss";
import HomeIcon from '@mui/icons-material/Home';
import LockIcon from '@mui/icons-material/Lock';
import DescriptionIcon from '@mui/icons-material/Description';

export function Menu() {
    return (
        <div className="wrapperMenu">
            <HomeIcon />
            <LockIcon />
            <DescriptionIcon />
        </div>
    )
}