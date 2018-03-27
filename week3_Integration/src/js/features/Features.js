import MachineData from '../../api/MachineData';
import GridLine from '../content/GridLine';

export default class Features {
  constructor() {
    const $tpControls = $($('#tp-controls').html());
    const $addMachine = $tpControls.find('.add-machine');


    // 新增機台
    $addMachine.click(() => {
      $('.modal-title').text('Add');
      $('.btn-save').show();
      const detailRow = Object.keys(MachineData[0]).map(key => (
        `<div class="detailRow">
          <p class="detailTitle">${key.toUpperCase()}：</p>
          <input class="add-${key} add-check border"/>
        </div>`
      ));
      $('.modal-body').html(detailRow.join(''));
    });

    // 新增機台-儲存
    $('.btn-save').click(() => {
      const addId = $('.add-id').val();
      const addModel = $('.add-model').val();
      const addStatus = $('.add-status').val();
      const addTemperature = $('.add-temperature').val();
      const addAddress = $('.add-address').val();
      const addRegion = $('.add-region').val();
      const addDisable = $('.add-disable').val();

      // 輸入資料不可空白
      $('.add-check').each((index) => {
        let verificationItem = $($('.add-check')[index]).val().trim().length;
        if (verificationItem === 0) {
          verificationItem = 1;
          alert('請輸入完整資料');
          return false;
        }
        return false;
      });

      // 狀態輸入0-2以外的錯誤
      if (addStatus.match(/[0-2]/) === null || addStatus.length > 1) {
        alert('【Status 錯誤】只可輸入0或1或2，字數只可輸入1位');
        return;
      }

      // Status輸入錯誤
      if (addDisable.toLowerCase() !== 'true' && addDisable.toLowerCase() !== 'false') {
        alert('【Disable 錯誤】只可輸入 true or false');
        return;
      }

      const machine = {
        id: addId,
        model: addModel,
        status: addStatus,
        temperature: addTemperature,
        address: addAddress,
        region: addRegion,
        disable: addDisable.toLowerCase() === 'true',
      };

      // 將資料新增進API裡
      MachineData.push(machine);

      // 清空現有列表畫面
      $('.grid-list').html('');

      // 重長GridRow
      MachineData.forEach((lineData) => {
        const $GridLine = new GridLine(lineData);
        $('.grid-list').append($GridLine.render());
      });

      // 關閉視窗
      $('#exampleModalCenter').modal('hide');
    });

    this.Features = $tpControls;
  }

  render() {
    return this.Features;
  }
}