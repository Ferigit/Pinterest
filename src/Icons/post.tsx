interface IProps {
  onClick?: () => void;
}
export const DeleteIcon = ({ onClick }: IProps) => {
  return (
    <svg
      onClick={onClick}
      className="shrink-0 cursor-pointer"
      fill="#000000"
      height="24px"
      width="24px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27.965 27.965"
      xmlSpace="preserve"
    >
      <g>
        <g id="c142_x">
          <path
            d="M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982
        C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78
        l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782
        c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z"
          />
        </g>
        <g id="Capa_1_104_"></g>
      </g>
    </svg>
  );
};

export const EditIcon = ({ onClick }: IProps) => {
  return (
    <svg
      onClick={onClick}
      className=""
      height="24"
      width="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      aria-label=""
      role="img"
    >
      <path d="m13.386 6.018 4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596l-2.298 2.3-4.596-4.598 2.298-2.299a3.248 3.248 0 0 1 4.596 0z"></path>
    </svg>
  );
};

export const FileUploadIcon = ({ onClick }: IProps) => {
  return (
    <svg
      onClick={onClick}
      height="40"
      viewBox="0 0 1792 1792"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z" />
    </svg>
  );
};
