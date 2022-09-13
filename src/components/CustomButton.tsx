import styled from "@emotion/styled";

type CustomButtonProps = {
  icon: string;
  onclick?: any;
  width?: number;
};

function CustomButton({ icon, width, onclick }: CustomButtonProps) {
  const Button = styled.button`
    position: relative;
    width: ${width}px;
    height: 34px;
    border: none;
    cursor: pointer;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    &:active {
      scale: 0.95;
    }
  `;

  const Icon = styled.img``;

  return (
    <Button onClick={onclick}>
      <Icon src={icon} />
    </Button>
  );
}

export default CustomButton;
