#import "CustomModule.h"

@implementation CustomModule

/*
 Export module to be used on RN side.
 */
RCT_EXPORT_MODULE();

/*
 Export 'getModuleList' method to be used on RN side
 */
RCT_EXPORT_METHOD(getModuleList: (RCTResponseSenderBlock)callback) {
  NSArray *moduleList = @[@"A Module", @"B Module"];
  
  callback(@[ moduleList]);
}

@end
