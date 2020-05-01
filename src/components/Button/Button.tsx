import React, {FC} from 'react';
import classNames from "classnames";

export enum ButtonSize{
    Large,
    Small
}

export enum ButtonType{
    Primary,
    Danger ,
    Default,
    Link
}

interface ButtonProps {
    size?: ButtonSize;
    className?: string;
    btnType?: ButtonType;
    disabled?: boolean;
    children: React.ReactNode;
    href?: string;
}

export const Button: FC<ButtonProps> = ({
    size,
    className,
    btnType,
    disabled,
    children,
    href,
    ...restProps
}) => {
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    });
    if(btnType === ButtonType.Link && href){
        return (
            <a
               className={classes}
               href={href}
               {...restProps}
            >
                {children}
            </a>
        );
    }else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        );
    }
};

Button.defaultProps={
    disabled:false,
    btnType: ButtonType.Default
};

export default Button;