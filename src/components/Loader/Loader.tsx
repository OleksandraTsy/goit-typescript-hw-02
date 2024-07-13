
import css from "./Loader.module.css";
import { InfinitySpin } from 'react-loader-spinner'
import { FC } from 'react';

export const Loader: FC = () => {
    return (
        <div className={css.loader}>
        <InfinitySpin
          visible={true}
          width="200"
          color="#026049"
            ariaLabel="infinity-spin-loading"
          />
          </div>    
    );
};