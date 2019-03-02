import Badge from '../components/ct/Badge.vue';
import BaseAlert from '../components/ct/BaseAlert.vue';
import BaseButton from '../components/ct/BaseButton.vue';
import BaseCheckbox from '../components/ct/BaseCheckbox.vue';
import BaseInput from '../components/ct/BaseInput.vue';
import BasePagination from '../components/ct/BasePagination.vue';
import BaseProgress from '../components/ct/BaseProgress.vue';
import BaseRadio from '../components/ct/BaseRadio.vue';
import BaseSlider from '../components/ct/BaseSlider.vue';
import BaseSwitch from '../components/ct/BaseSwitch.vue';
import Card from '../components/ct/Card.vue';
import Icon from '../components/ct/Icon.vue';

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
