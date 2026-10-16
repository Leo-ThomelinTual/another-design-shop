import styles from "./color-palette.module.css"

type ColorPaletteProps = {
  colorName: string;
  color: string;
  onClick: () => void;
}

const ColorPalette = ({ colorName, color, onClick }: ColorPaletteProps) => {
  return (
    <button className={styles.colorContainer} style={{ backgroundColor: `${color}` }} aria-labelledby={colorName} onClick={onClick} />
  )
}

export default ColorPalette
