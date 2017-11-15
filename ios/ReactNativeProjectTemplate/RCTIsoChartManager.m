//
//  RCTIsoChartManager.m
//  ReactNativeProjectTemplate
//
//  Created by Ismail Kurar on 15/11/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTIsoChartManager.h"
#import "RCTIsoChartView.h"

@implementation RCTIsoChartManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[RCTIsoChartView alloc] init];
}

@end
