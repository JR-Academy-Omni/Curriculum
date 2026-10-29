/** Short teaching translations of method-flows.ts / methods.ts.
 * Chinese remains the lecture language. No new claims, metrics or platform behavior. */
export interface MethodLabelsEn {
  id: number;
  name: string;
  nodes: [string, string, string, string, string];
  trigger: string;
  action: string;
  stop: string;
}
export const methodLabelsEn: MethodLabelsEn[] = [
  {id:1,name:'Direct outreach',nodes:['Relevant contact','View sample','Submit need','Book diagnosis','Paid pilot'],trigger:'Relevant need sent',action:'Offer booking',stop:'Booked: stop nudges'},
  {id:2,name:'Warm introductions',nodes:['Warm intro','Personal link','Confirm need','Book a call','Paid delivery'],trigger:'Intro received',action:'Show relevant sample',stop:'Stop on decline / sale'},
  {id:3,name:'Manual value delivery',nodes:['Define task','Submit materials','Manual delivery','Use the result','Paid acceptance'],trigger:'Materials complete',action:'Create delivery list',stop:'Acceptance required'},
  {id:4,name:'Niche marketplace',nodes:['Niche market','Task template','Copy and use','Finish task','Buy extension'],trigger:'Copied, not finished',action:'Offer setup tip',stop:'Done: stop reminder'},
  {id:5,name:'Problem-led search content',nodes:['Search problem','How-to page','Try sample','Submit need','Paid solution'],trigger:'Relevant sample used',action:'Offer request form',stop:'Submitted: stop nudges'},
  {id:6,name:'Comparison content',nodes:['Compare options','Comparison page','Choose use case','Try solution','Confirm purchase'],trigger:'Use case matches',action:'Show fitting sample',stop:'No fit: no pressure'},
  {id:7,name:'Data-led programmatic SEO',nodes:['Search use case','Use-case page','Set up solution','Connect successfully','Repeat use'],trigger:'Setup unsuccessful',action:'Offer relevant fix',stop:'Fixed: end guidance'},
  {id:8,name:'Free micro-tool',nodes:['Free tool','Enter problem','Get result','Diagnose need','Paid solution'],trigger:'Relevant need found',action:'Offer diagnosis',stop:'Booked: stop nudges'},
  {id:9,name:'Useful lead resource',nodes:['Useful resource','Get resource','Use resource','Share problem','Paid service'],trigger:'Follow-up consent',action:'Ask about use',stop:'Opt-out: stop'},
  {id:10,name:'Workshop or demo class',nodes:['Invite signups','Signup page','Attend event','Complete task','Paid pilot'],trigger:'Signed up, not here',action:'Pre-event reminder',stop:'Checked in: stop'},
  {id:11,name:'Community help',nodes:['Answer question','View sample','Try it yourself','Submit need','Become customer'],trigger:'User asks for help',action:'Offer relevant sample',stop:'Follow community rules'},
  {id:12,name:'Media or podcast story',nodes:['Media story','Dedicated page','View task sample','Ask a question','Paid pilot'],trigger:'Relevant request',action:'Route to service',stop:'No need: no blast'},
  {id:13,name:'Customer proof',nodes:['Customer result','Case-study page','Match use case','Book validation','Paid delivery'],trigger:'Same task selected',action:'Offer validation',stop:'No consent: no post'},
  {id:14,name:'Partner content or event',nodes:['Partner referral','Joint page','Join experience','Confirm need','Paid project'],trigger:'Partner source',action:'Offer fitting experience',stop:'Deduplicate signup'},
  {id:15,name:'Affiliate commission',nodes:['Affiliate link','Visit product','Complete trial','Eligible order','Settle commission'],trigger:'Refund window over',action:'Check then settle',stop:'Exclude refunds / dupes'},
  {id:16,name:'Channel partners',nodes:['Channel partner','Submit lead','Joint diagnosis','Shared delivery','Renew contract'],trigger:'Opportunity fits',action:'Assign delivery owner',stop:'No duplicate claims'},
  {id:17,name:'Two-sided referral rewards',nodes:['Seed gets value','Invite link','Friend tries','Value and reward','New user refers'],trigger:'Friend qualifies',action:'Reward both sides',stop:'Exclude dupes / abuse'},
  {id:18,name:'Collaboration invites',nodes:['Create project','Invite members','Members join','Complete together','New member starts'],trigger:'Joined, not finished',action:'Open shared task',stop:'Done / exit: stop'},
  {id:19,name:'Shareable output',nodes:['Real use','Create output','Choose to share','Relevant user tries','New user creates'],trigger:'Output ready',action:'Offer share card',stop:'Never auto-post'},
  {id:20,name:'Embeddable tools',nodes:['Create tool','Embed on website','Visitors use','Visit source','New user creates'],trigger:'Tool published',action:'Provide embed code',stop:'Respect brand / access'},
  {id:21,name:'Sample or short demo',nodes:['See sample','Choose task','Try demo','Finish output','Start real use'],trigger:'Task chosen, not tried',action:'One-click demo',stop:'Done: end guidance'},
  {id:22,name:'Template-led first task',nodes:['Choose template','Edit content','Finish first output','Save for reuse','Use again'],trigger:'Started, not finished',action:'Show missing step',stop:'Done / deleted: stop'},
  {id:23,name:'Hands-on onboarding',nodes:['Book help','Set up together','First task','Repeat alone','Keep using'],trigger:'Setup blocked',action:'Book hands-on help',stop:'Success: hand over'},
  {id:24,name:'Time-limited trial',nodes:['Start trial','Set up task','Reach value','Choose at expiry','Paid subscription'],trigger:'Trial ending',action:'Explain terms / choice',stop:'Paid / cancelled: stop'},
  {id:25,name:'Message-matched landing page',nodes:['Clear offer','Matched page','View proof','Book next step','Paid delivery'],trigger:'Matching need sent',action:'Offer relevant slots',stop:'Booked: stop nudges'},
  {id:26,name:'Small paid pilot',nodes:['Define scope','Pay for pilot','Submit materials','Accept delivery','Next order'],trigger:'Paid and ready',action:'Deliver and validate',stop:'New scope: re-agree'},
  {id:27,name:'Freemium',nodes:['Start free','Finish task','Reach free limit','Choose upgrade','Paid expansion'],trigger:'Real need hits limit',action:'Explain added value',stop:'Keep existing outputs'},
  {id:28,name:'Seats or usage expansion',nodes:['Customer uses','New need','Compare plans','Expand scope','More value'],trigger:'New seats / usage',action:'Suggest matching plan',stop:'No need: no push'},
  {id:29,name:'Streaks and progress',nodes:['Complete action','Record progress','Next reminder','Act again','Build progress'],trigger:'Natural task cycle',action:'Offer next task',stop:'Rest / opt-out: stop'},
  {id:30,name:'Behavior-triggered reminder',nodes:['Start task','Save draft','Timely reminder','Return and finish','Stop reminders'],trigger:'Incomplete + consent',action:'One useful next step',stop:'Done: stop / rate-limit'},
  {id:31,name:'Periodic value report',nodes:['Real use','Save results','Value report','Return to task','More results'],trigger:'Real cycle data',action:'Summary + next step',stop:'No data: no fiction'},
  {id:32,name:'Reason-based winback',nodes:['Record churn','Fix the cause','Relevant invite','Return and verify','Keep using'],trigger:'Cause improved',action:'Invite verification',stop:'No fix / decline: stop'},
  {id:33,name:'Natural-cycle repurchase',nodes:['Complete delivery','Record cycle','Due reminder','Book or buy','Deliver again'],trigger:'Natural cycle due',action:'Book / replenish',stop:'Bought / cancelled: stop'},
  {id:34,name:'High-intent search ads',nodes:['Search ad','Matched page','Submit need','Qualify lead','Sale and costing'],trigger:'Budget / cost limit',action:'Pause and diagnose',stop:'Click is not a sale'},
  {id:35,name:'Feed creative testing',nodes:['Two creatives','Same offer','Submit need','Qualify lead','Sale and costing'],trigger:'Budget / window ends',action:'Compare lead quality',stop:'Small sample: no claim'},
  {id:36,name:'Visitor retargeting',nodes:['Relevant visit','Not completed','Relevant retarget','Return to value','Buy and exit'],trigger:'Qualified, unfinished',action:'Relevant next step',stop:'Done: exclude / cap'}
];
export const methodLabelsEnById = Object.fromEntries(methodLabelsEn.map(m => [m.id, m])) as Record<number, MethodLabelsEn>;
export const stateLabelsEn: Record<string, string> = {
 '相关人群':'Relevant audience','目标人群':'Target audience','访客':'Visitor','待筛选':'Needs screening','合格线索':'Qualified lead','已付费':'Paid customer',
 '相关联系人':'Relevant contact','首批客户':'First customers','试点客户':'Pilot customer','已获价值':'Value reached',
 '相关访客':'Relevant visitor','使用者':'User','需求明确':'Clear need','买家意图':'Buyer intent','合格用户':'Qualified user',
 '具体任务':'Specific task','活跃用户':'Active user','报名者':'Registered','参与者':'Participant','社区用户':'Community user',
 '节目受众':'Media audience','获授权案例':'Approved case','相关受众':'Relevant audience','推荐受众':'Referral audience',
 '贡献确认':'Contribution checked','客户机会':'Opportunity','持续客户':'Ongoing customer','推荐者':'Referrer','新使用者':'New user',
 '已激活':'Activated','新种子':'New seed user','种子用户':'Seed user','受邀访客':'Invited visitor','团队获值':'Team value reached',
 '分享者':'Sharer','发布者':'Publisher','外部访客':'External visitor','目标访客':'Target visitor','留存用户':'Retained user',
 '目标用户':'Target user','购买意图':'Purchase intent','扩展需求':'Expansion need','扩展机会':'Expansion lead','扩展客户':'Expanded customer',
 '同意提醒':'Reminder opted in','回访用户':'Returning user','尚未完成':'Incomplete','同意联系':'Contact opted in','完成者':'Completed',
 '报告接收者':'Report recipient','流失用户':'Churned user','改进完成':'Issue improved','成熟客户':'Cycle-ready customer',
 '复购客户':'Repeat buyer','任务意图':'Task intent','付费访客':'Paid-channel visitor','同一人群':'Same audience',
 '已有访客':'Past visitor','待行动用户':'Action pending','合格受众':'Qualified audience'
};
export const stageLabelsEn: Record<string, string> = {'入口':'Entry','网站':'Web','App':'App','行为':'Action','结果':'Outcome'};
