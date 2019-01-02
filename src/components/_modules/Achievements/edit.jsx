import React, { Component } from 'react';
import PageHeader from './../../PageHeader';

class AchievementPage extends Component {
  render() {
    return [
    <PageHeader breadcrumps={['Modules', 'Achievements', 'Create achievement']} />,

<div className="row">

<div className="col-sm-6 col-lg-6">
<div className="card create-achievement">
    <h3 className="card-header">Description</h3>
    <div className="card-body">
        <form>
          <div className="row">
            <div className="col-md-4">
              <label className="col-form-label">Preview</label>
              <div className="card card-figure">
                <figure className="figure">
                  <img className="img-fluid" src="https://c1.staticflickr.com/4/3799/8918367978_b516597e46_n.jpg" alt="" />
                  {/*<figcaption className="figure-caption">
                    <h6 className="figure-title"> </h6>
                  </figcaption>*/}
                </figure>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group">
                  <label for="inputText3" className="col-form-label">Name</label>
                  <input id="inputText3" type="text" className="form-control"/>
              </div>
            </div>
          </div>
            
            
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Notes</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>



            
        </form>
    </div>
</div>
</div>

<div className="col-sm-6 col-lg-6">
<div className="card">
  <h3 className="card-header">Find image</h3>
    <div className="card-body border-top">
        <form>

<div className="form-group custom-file">
                <button className="btn btn-primary btn-xs">Select</button>
                <input type="file" className="custom-file-input" id="customFile"/>
                <label className="custom-file-label" for="customFile">Upload image...</label>
            </div>



            <div className="form-group">
                <label for="inputSmall" className="col-form-label">Keywords</label>
                <input id="inputSmall" type="text" value="" className="form-control form-control-sm"/>
            </div>

            <div className="">

<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4071/4277029894_7023f3ca2f_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7065/6852957177_9f27f30f12_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3936/14950097294_6212158ff5_m.jpg"/>
</div>

<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8420/8710133086_936fe32e0f_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8206/8235791752_c26a81fa90_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7032/6654543769_08f14bb71b_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7166/6654533897_cc6b6caac7_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3214/2865021071_95521aedcf_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8433/7833623576_ff71a24cbe_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8327/8378446720_252565bf7a_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/1/48/177310864_3c0e2f0383_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7151/6654530267_4b7c6eeecc_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8332/8144175952_86e597dbc4_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4223/34796999691_5bc89cf86b_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3404/3259887170_2c3a469201_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3761/10842197055_9c02ecac37_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8678/16384723592_dc121d7fac_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3228/3031283822_4d2e5de689_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7453/11980640796_f94bc0da3e_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/6/5313/5883255809_bdcbf7b1ca_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7570/15650744011_8f44aff26a_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7296/13120377635_958199ef5b_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8217/8327403232_322638d0d9_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/6/5444/9235231412_9d06b046d4_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/7/6057/6270294959_79336f8fac_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2390/2391337419_281e1a3082_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2271/5761241763_a60e9c0b6b_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8086/8373838653_3391ae3252_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2833/11040570833_cca7b58ae3_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2659/3880962251_3645e18f16_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7559/15463548913_ea2618345e_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/6/5011/5515408083_b31d2c22fd_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4863/44593641590_566dbeb5cc_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8051/8119579152_cd5ef4ac98_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/7/6102/6290142300_b88815e809_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2849/10486885315_d99534049d_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4031/4272752503_ef569d536c_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2697/4456914898_94dab241b2_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4916/45064447305_36a81583b2_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2945/15365439232_3c63bce0b5_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4861/45423114255_98d361a3a8_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/2/1767/41259943480_15015e28ea_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/1/65/162824365_fe4b9dd66f_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7035/6654523849_4287f52661_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3170/2728200717_27664c37ac_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7694/27495204230_b1fcd8fa4f_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8202/8240118499_c731dc4546_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7452/9532488323_8f024dd237_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/2/1959/44818519101_c0e6bf7a3d_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4019/4476150919_a10b3c8dec_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8337/8272235731_7fcc18ded7_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/2/1750/42382445552_ed7d430732_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2901/13899615583_2b5ecdcd8c_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8016/7566378882_5c6abd9640_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8377/8558955047_f7d82f1674_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/1/777/32552493251_3f4bfb3969_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4796/40728696062_0b4554e76f_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4045/4583325627_b7b08b2964_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/7/6053/6414996725_7a3bff5399_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2591/3977973594_a5c163fc41_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/1/948/41310778934_d80bcc7f2a_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2038/2259610321_0e19ea17da_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8383/8636265883_b7d3c9e83b_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4077/4882342166_ae3c4a43e2_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7489/16024321258_e688977957_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3037/2648483817_5149654d99_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3217/2778879642_8088246507_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4214/35718255275_c1b6a8588c_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3136/2705338813_a175008d94_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4024/4309797729_18854581b1_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4865/45704980321_3bfdb121ec_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3412/3315493494_63b69fbd99_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8621/15816153942_d8f2bb8112_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4206/35797524235_b480a245d1_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4148/5017936169_cb569fa12c_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4356/36624744865_b9154dee4d_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2014/2080173069_fcfd322cd6_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8020/7334823768_5ebb19d03c_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8501/8415107193_6e19723148_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3621/3346010710_4c4aac3db5_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/9/8495/8267597107_57e4c6630c_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2911/13999724091_a3527ac7ef_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4163/34435124715_89db3ed91c_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7034/6491892157_ab8822ffbe_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7027/6528053573_8d3fb95300_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7369/13990555228_24d4ed5be9_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/6/5309/5585913941_5b758e7800_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7244/7394650572_52a840a11b_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4024/4383062125_88c523eef6_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/3/2602/3740670714_9d526f9d88_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/4/3209/3035976960_ce4a73587d_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/5/4315/35630149880_90da125280_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7150/6657340527_0795a6990c_m.jpg"/>
</div>
<div class="img-thumb">
  <img class="img-fluid" alt="" src="http://c1.staticflickr.com/8/7312/12482027263_6a6d815689_m.jpg"/>
</div>

            </div>

           
        </form>
    </div>
</div>
</div>

</div>
];
  }
}

export default AchievementPage;
