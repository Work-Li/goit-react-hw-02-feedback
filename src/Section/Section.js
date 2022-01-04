import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
