//
//  EnergyMeter.swift
//  CSE216
//
//  Created by Sean Hamilton on 5/20/17.
//  Copyright © 2017 Sean Hamilton. All rights reserved.
//

import UIKit

@IBDesignable
open class EnergyMeter: UIView {

    @IBInspectable open var fillColor = UIColor.black
    @IBInspectable open var needleColor = UIColor.red
    @IBInspectable open var min = 0.0
    @IBInspectable open var max = 8.0
    @IBInspectable open var value =  0.0 {
        didSet {
            self.setNeedsDisplay()
        }
    }

    override open func draw(_ rect: CGRect) {
        
        // Meter
        let insetRect = rect.insetBy(dx: 1, dy: 1)
        let path = UIBezierPath(ovalIn: insetRect)
        path.lineWidth = 2
        fillColor.setStroke()
        fillColor.setFill()
        path.fill()
        path.stroke()
        
        // Needle
        let center = CGPoint(x: bounds.width/2.0, y: bounds.height/2.0)
        let length = Double(bounds.width/2.0)
        let range = (3*Double.pi/2) / (max - min)
        let xvalue = length+length*cos(value*range+3*Double.pi/4)
        let yvalue = length+length*sin(value*range+3*Double.pi/4)
        let valuePoint = CGPoint(x: xvalue, y: yvalue)
        
        let context = UIGraphicsGetCurrentContext()
        context?.setStrokeColor(needleColor.cgColor)
        context?.setLineWidth(4)
        context?.move(to: center)
        context?.addLine(to: valuePoint)
        context?.strokePath()
        
        // Limit Ring
    }
}
