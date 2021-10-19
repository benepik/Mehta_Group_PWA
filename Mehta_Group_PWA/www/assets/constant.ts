import { Key } from "protractor"

export const URLS = {

  //***************** Development URL*****************
  MainUrl:"https://benepik.in",
  baseUrl:"https://benepik.in/BandhanRewards/api",

  //***************** UAT URL*****************
  // MainUrl:"https://benepik.org",
  // baseUrl:"https://benepik.org/BandhanRewards/api",

  //***************** production URL*****************
    // MainUrl:"https://benepik.co.in",
    // baseUrl:"https://benepik.co.in/BandhanRewards/api",

  //pwa
  maintanceUrl:"/maintainence",
  MobileSubmitUrl:"/login",
  otpSubmitUrl:"/otpVerify",
  forceUpdateUrl:"/forceUpdate",
  registrationFormUrl:"/registrationForm",
  registrationFormSubmitUrl:"/saveForm",
  PromotedFeedUrl:"/promotedFeed",
  HomeUrl:"/home",
  QUickAccessUrl:'/quickAccess',
  PostListUrl: '/postList',
  PostDetailUrl:'/postDetail',
  SideMenuUrl:'/sideMenu',
  HelpSupportUrl:'/helpSupport',
  AccStatementUrl:'/accStatement',
  ContactHelpSupportUrl:'/contactHelpSupport',
  LikeList: '/likeList',
  DoCommentUrl:'/doComment',
  accountDetailUrl:"/accountDetails",
  imageUploadUrl:"/uploadImage",
  geoLocationUrl:"/geoLocation",
  LogOutUrl:'/logout',
  DoLike:'/doLike',
  customerAllocationUrl:"/customerList",
  searchApiUrl:"/search",
  pointAllocateApiUrl:'/pointAllocate',
  getUserList:'/userList',
  otpGetUrl:"/sendOtp",
  reedemTransectionUrl:"/transactionHistory",
  SkipUrl:"/common",
  UpdateRegistrationUrl:'/updateRegistration',
  CustRegDataUrl:'/custRegData',
  DealerAllocationUrl:'/dealerAllocation',
  ProductListUrl:'/productList',
  CustReg:"/custReg",
  orderDetailUrl:"/OrderDetail",
  acceptRejectUrl:"/OrderUpdate",
  AddressUrl:'/address',
  AddAddressUrl:'/addAddress',
  ProductDetailUrl:'/productDetail',
  BuyUrl:'/buy',
  CartUrl:'/cart',
  PurchaseHistoryUrl:'/purchaseHistory',
  ApprovalListUrl:'/ApprovalList',
  OrderDetailListUrl:'/OrderDetailList',
  RedemptionUrl:'/redemption',
  BrandProductUrl:'/brandProduct',
  ExistingUrl:'/Existing'
}

export const APP_CONFIG = {
  clientId :'CO-43',
  device:4,
  device_id:'PWA',
  app_version:1
  // packageName : 'com.benepik.multiply',
}