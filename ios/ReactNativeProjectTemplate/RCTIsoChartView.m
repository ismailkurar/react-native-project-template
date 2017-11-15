//
//  RCTIsoChartView.m
//  ReactNativeProjectTemplate
//
//  Created by Ismail Kurar on 15/11/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "RCTIsoChartView.h"

@implementation RCTIsoChartView{
  PieChartView *pieChart;
}

- (instancetype)init
{
  self = [super init];
  pieChart  = [[PieChartView alloc] initWithFrame:self.bounds];
  
  
  pieChart.usePercentValuesEnabled = YES;
  pieChart.drawSlicesUnderHoleEnabled = NO;
  pieChart.holeRadiusPercent = 0.58;
  pieChart.transparentCircleRadiusPercent = 0.61;
  pieChart.chartDescription.enabled = NO;
  [pieChart setExtraOffsetsWithLeft:5.f top:10.f right:5.f bottom:5.f];
  
  pieChart.drawCenterTextEnabled = YES;
  
  NSMutableParagraphStyle *paragraphStyle = [[NSParagraphStyle defaultParagraphStyle] mutableCopy];
  paragraphStyle.lineBreakMode = NSLineBreakByTruncatingTail;
  paragraphStyle.alignment = NSTextAlignmentCenter;
  
  NSMutableAttributedString *centerText = [[NSMutableAttributedString alloc] initWithString:@"Charts\nby Daniel Cohen Gindi"];
  [centerText setAttributes:@{
                              NSFontAttributeName: [UIFont fontWithName:@"HelveticaNeue-Light" size:13.f],
                              NSParagraphStyleAttributeName: paragraphStyle
                              } range:NSMakeRange(0, centerText.length)];
  [centerText addAttributes:@{
                              NSFontAttributeName: [UIFont fontWithName:@"HelveticaNeue-Light" size:11.f],
                              NSForegroundColorAttributeName: UIColor.grayColor
                              } range:NSMakeRange(10, centerText.length - 10)];
  [centerText addAttributes:@{
                              NSFontAttributeName: [UIFont fontWithName:@"HelveticaNeue-LightItalic" size:11.f],
                              NSForegroundColorAttributeName: [UIColor colorWithRed:51/255.f green:181/255.f blue:229/255.f alpha:1.f]
                              } range:NSMakeRange(centerText.length - 19, 19)];
  pieChart.centerAttributedText = centerText;
  
  pieChart.drawHoleEnabled = YES;
  pieChart.rotationAngle = 0.0;
  pieChart.rotationEnabled = YES;
  pieChart.highlightPerTapEnabled = YES;

  
  // SET DATA ///////
  double mult = 2;
  int count = 2;
  NSArray *parties;
  parties = @[
              @"Party A", @"Party B", @"Party C", @"Party D", @"Party E", @"Party F",
              @"Party G", @"Party H", @"Party I", @"Party J", @"Party K", @"Party L",
              @"Party M", @"Party N", @"Party O", @"Party P", @"Party Q", @"Party R",
              @"Party S", @"Party T", @"Party U", @"Party V", @"Party W", @"Party X",
              @"Party Y", @"Party Z"
              ];
  
  NSMutableArray *values = [[NSMutableArray alloc] init];
  
  for (int i = 0; i < count; i++)
  {
    [values addObject:[[PieChartDataEntry alloc] initWithValue:(arc4random_uniform(mult) + mult / 5) label:parties[i % parties.count] icon: [UIImage imageNamed:@"icon"]]];
  }
  
  PieChartDataSet *dataSet = [[PieChartDataSet alloc] initWithValues:values label:@"Election Results"];
  
  dataSet.drawIconsEnabled = NO;
  
  dataSet.sliceSpace = 2.0;
  dataSet.iconsOffset = CGPointMake(0, 40);
  
  // add a lot of colors
  
  NSMutableArray *colors = [[NSMutableArray alloc] init];
  [colors addObjectsFromArray:ChartColorTemplates.vordiplom];
  [colors addObjectsFromArray:ChartColorTemplates.joyful];
  [colors addObjectsFromArray:ChartColorTemplates.colorful];
  [colors addObjectsFromArray:ChartColorTemplates.liberty];
  [colors addObjectsFromArray:ChartColorTemplates.pastel];
  [colors addObject:[UIColor colorWithRed:51/255.f green:181/255.f blue:229/255.f alpha:1.f]];
  
  dataSet.colors = colors;
  
  PieChartData *data = [[PieChartData alloc] initWithDataSet:dataSet];
  
  NSNumberFormatter *pFormatter = [[NSNumberFormatter alloc] init];
  pFormatter.numberStyle = NSNumberFormatterPercentStyle;
  pFormatter.maximumFractionDigits = 1;
  pFormatter.multiplier = @1.f;
  pFormatter.percentSymbol = @" %";
  [data setValueFormatter:[[ChartDefaultValueFormatter alloc] initWithFormatter:pFormatter]];
  [data setValueFont:[UIFont fontWithName:@"HelveticaNeue-Light" size:11.f]];
  [data setValueTextColor:UIColor.whiteColor];
  
  
  pieChart.data = data;
  [pieChart highlightValues:nil];
  
  return self;
}

-(void)layoutSubviews
{
  [super layoutSubviews];
  pieChart.frame = self.bounds;
  [self addSubview:pieChart];
}



@end

