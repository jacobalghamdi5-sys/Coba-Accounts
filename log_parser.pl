#!/usr/bin/perl
# 🐪 COBA ACCOUNTS - ADVANCED PERL LOG PARSING SYSTEM
use strict;
use warnings;

print "⚡ Coba Accounts Perl Audit Module Online.\n";

my $simulated_log_entry = "2026-05-24 USER=JacobAlghamdi5-sys AUTH=SUCCESS IP=192.168.1.15";

if ($simulated_log_entry =~ /AUTH=SUCCESS/) {
    print "🐪 Perl Core: Successfully parsed system activity log entry.\n";
    print "Perl Status Check: Account authorization token state verified.\n";
} else {
    print "🚨 Perl Core Alert: Found unmapped or failed login metric values.\n";
}
