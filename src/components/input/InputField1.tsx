
import { Eye, EyeOff, ShieldX, type LucideIcon } from 'lucide-react'
import { useState, type InputHTMLAttributes, useMemo, forwardRef } from 'react'

/* npm install lucide-react */
type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	id: string;
	label: string;
	Icon?: LucideIcon;
	IconSize?: number;
	errorMessage?: string;
	isValid: boolean;
	defaultColor?: string;
	focusColor?: string;
	filledColor?: string;
	errorColor?: string;
	inputBgColor?: string;
	inputTextColor?: string;
	inputIconColor?: string;
	inputPlaceholderColor?: string;
	inputLabelColor?: string;
	labelFontSize?: string;
	inputFontSize?: string;
	labelFontFamily?: string;
	inputFontFamily?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({
	id,
	label,
	Icon,
	IconSize = 24,
	errorMessage,
	isValid,
	type,
	defaultColor = '#1b263b',
	focusColor = '#05f2db',
	filledColor = '#00ff00',
	errorColor = '#d9048e',
	inputBgColor = '#e5eff9',
	inputTextColor = '#2c323a',
	inputIconColor = '#4b5664',
	inputPlaceholderColor = '#4b5664',
	inputLabelColor = '#95abbf',
	labelFontSize = '14px',
	inputFontSize = '14px',
	labelFontFamily = 'Inter, sans-serif',
	inputFontFamily = 'Inter, sans-serif',
	...rest
}, ref) => {
	const [showPassword, setShowPassword] = useState(false)
	const [isFocused, setIsFocused] = useState(false)

	// Verifica se o input está preenchido (controlado ou não)
	const isFilled = !!(rest.value || rest.defaultValue)
	const isPasswordInput = type === 'password'

	// Determina o tipo atual do input (para mostrar/esconder senha)
	const currentType = isPasswordInput ? (showPassword ? 'text' : 'password') : type

	// Estilos dinâmicos para o container principal, baseados no estado
	const containerStyle = useMemo(() => {
		let borderColor = defaultColor
		if (!isValid) {
			borderColor = errorColor
		} else if (isFocused) {
			borderColor = focusColor
		} else if (isFilled) {
			borderColor = filledColor
		}

		return {
			backgroundColor: inputBgColor,
			borderColor: borderColor,
			boxShadow: `0 0 4px ${borderColor}`,
		}
	}, [isValid, isFocused, isFilled, defaultColor, errorColor, focusColor, filledColor, inputBgColor])

	const errorId = `${id}-error`;

	return (
		<div className="flex w-full flex-col gap-2 bg-transparent p-2.5">
			<label
				htmlFor={id}
				className="font-medium"
				style={{
					color: inputLabelColor,
					fontSize: labelFontSize,
					fontFamily: labelFontFamily,
					textShadow: `0px 1px 2px ${inputLabelColor}`,
				}}
			>
				{label}
			</label>

			<div
				style={containerStyle}
				className="flex w-full items-center gap-2 rounded-lg border p-3 transition-all duration-300 ease-in-out"
			>
				{Icon && (
					<Icon size={IconSize} style={{ color: inputIconColor }} />
				)}

				<input
					ref={ref}
					id={id}
					type={currentType}
					className="w-full border-none bg-transparent font-semibold outline-none placeholder:font-normal"
					style={
						{
							color: inputTextColor,
							fontSize: inputFontSize,
							fontFamily: inputFontFamily,
						} as React.CSSProperties // Cast para aceitar a variável CSS
					}
					aria-invalid={!isValid}
					aria-errormessage={!isValid ? errorId : undefined}
					aria-describedby={!isValid ? errorId : undefined}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					{...rest}
				/>

				{/* Estilo dinâmico para o placeholder injetado diretamente */}
				<style>
					{`
            #${id}::placeholder {
              color: ${inputPlaceholderColor};
            }
            /* Esconde o ícone de "olho" padrão do Microsoft Edge */
            #${id}::-ms-reveal {
              display: none;
            }
          `}
				</style>

				{isPasswordInput && (
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="flex cursor-pointer items-center justify-center pr-2"
						style={{ color: inputIconColor }}
						aria-label={showPassword ? 'Hide password' : 'Show password'}
					>
						{showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
					</button>
				)}
			</div>

			{/* Mensagem de erro */}
			{!isValid && errorMessage && (
				<span
					id={errorId}
					role="alert"
					className="mt-1 flex items-center gap-1 text-xs"
					style={{ color: errorColor }}
				>
					<ShieldX size={16} aria-hidden="true" />
					<span className="font-bold italic" style={{ textShadow: `0px 1px 2px ${errorColor}`}}>
						{errorMessage}
					</span>
				</span>
			)}
		</div>
	);
})

InputField.displayName = "InputField"

export default InputField;
