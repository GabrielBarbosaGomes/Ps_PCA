import "./styles.scss";
import LockIcon from '@mui/icons-material/Lock';

export function UserTitle() {
    return (
        <div className="wrapperUserTitle">
            <LockIcon />
            <p>Usuários</p>
        </div>
    )
}