import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Watch
        visible={true}
        width="200"
        color="#0b44cd"
        ariaLabel="infinity-spin-loading"
        wrapperStyle={{
          justifyContent: 'center',
        }}
      />
    </div>
  );
};
