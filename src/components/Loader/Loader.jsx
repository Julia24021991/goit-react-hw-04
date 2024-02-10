import css from "./Loader.module.css"
import { Blocks } from 'react-loader-spinner'
    ;
export const Loader = () => {
    return (
        <div className={css.spinner}>
            <Blocks
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
            />
        </div>
    )
}