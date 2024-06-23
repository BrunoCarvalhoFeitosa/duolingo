"use client"

interface AndroidIconSvgProps {
  width: string
  height: string
}

export const AndroidIconSvg = ({ width, height }: AndroidIconSvgProps) => {
  return (
    <svg
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.80942 4.3203C3.80942 4.09554 3.82731 3.88521 3.86151 3.69016L17.8617 18.4703L3.83906 33.2741C3.81952 33.1218 3.80942 32.961 3.80942 32.792V4.3203ZM5.35237 35.0876C5.86758 35.1708 6.47838 35.0454 7.13188 34.6805L24.1811 25.1417L19.4773 20.1758L5.35237 35.0876ZM21.0928 18.4703L26.2937 23.9609L32.63 20.4164C34.4567 19.393 34.4567 17.7194 32.63 16.6985L26.1861 13.0933L21.0928 18.4703ZM24.0742 11.9117L7.13188 2.43299C6.60625 2.13818 6.10808 1.99915 5.66613 1.99915C5.60892 1.99915 5.55264 2.00146 5.49734 2.00606L19.4773 16.7648L24.0742 11.9117Z"
            fill="currentColor"
        />
    </svg>
  )
}