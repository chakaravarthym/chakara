import React, { CSSProperties, ReactElement } from 'react';
interface CardProps {
  heading: string;
  backgroundColor: string;
  imgPath: string;
  title: string;
  textColor: string;
}
const styles: Record<string, CSSProperties> = {
  card: {
    background: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.1)',
    fontFamily: 'helvetica, sans-serif',
    overflow: 'hidden',
    maxWidth: '63rem',
    height: '26rem',
    position: 'relative',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    wordWrap: 'break-word',
  },
  cardContainer: {
    background: 'rgba(0, 0, 0, 0.1)',
    fontSize: '8rem',
    justifyContent: 'center',
    lineHeight: '100%',
    overflow: 'hidden',
    position: 'absolute',
    padding: '1rem',
    width: '100%',
    height: '100%',
  },
  cardInfo: {
    background: 'rgba(0, 0, 0, 0.01)',
    color: 'rgba(0, 0, 0, 0.6)',
    padding: '1rem',
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  cardDescription: {
    fontSize: '1.25rem',
    padding: '1rem 0',
  },
  cardCategory: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    textAlign: 'right',
  },
};

const ArticlesCards = ({
  heading,
  title,
  textColor,
  backgroundColor,
  imgPath,
}: CardProps): ReactElement => (
  <div
    style={{
      ...styles.card,
      backgroundImage: `url(${imgPath})`,
      backgroundColor,
    }}
  >
    <div style={styles.cardInfo}>
      <h1 style={{ ...styles.cardName, color: textColor }}>{heading}</h1>
      <p style={{ ...styles.cardDescription, color: textColor }}>{title}</p>
    </div>
  </div>
);

export default ArticlesCards;
