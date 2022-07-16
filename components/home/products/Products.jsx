import FadeWrap from '../../template/FadeWrap';
import Gallery from './Gallery';
import PastProjects from './PastProjects';
import Services from './Services';

export default function Products() {
  return (
    <FadeWrap>
      <Services />
      <Gallery />
      <PastProjects />
    </FadeWrap>
  );
}
