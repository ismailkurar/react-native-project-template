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

RCT_EXPORT_VIEW_PROPERTY(drawCenterText, BOOL);
RCT_EXPORT_VIEW_PROPERTY(centerText, NSString);
RCT_EXPORT_VIEW_PROPERTY(usePercentValues, BOOL);
RCT_EXPORT_VIEW_PROPERTY(holeRadius, double);
RCT_EXPORT_VIEW_PROPERTY(displayLegends, BOOL);

@end
