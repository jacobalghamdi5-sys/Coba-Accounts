# 🐍 COBA ACCOUNTS - BACKEND PYTHON SECURITY FIREWALL MOD
import time

print("⚡ Initializing Coba Core Python Firewall...")

blocked_ips_list = ["192.168.1.50", "10.0.0.99"]
failed_login_attempts_matrix = {}

def scan_incoming_request_node(user_alias, user_ip):
    """Scans and shields account connection points variables."""
    if user_ip in blocked_ips_list:
        print(f"🚨 SECURITY ALERT: Request from blocked IP [{user_ip}] has been dropped!")
        return "DENIED"
        
    # Tracks malicious loops string inputs
    if user_alias not in failed_login_attempts_matrix:
        failed_login_attempts_matrix[user_alias] = 1
    else:
        failed_login_attempts_matrix[user_alias] += 1
        
    if failed_login_attempts_matrix[user_alias] > 3:
        print(f"🚫 LOCKOUT ACTIVATED: Profile @{user_alias} locked due to too many failed attempts.")
        return "LOCKED"
        
    print(f"💚 SCAN SUCCESS: Connection path for @{user_alias} is verified clean.")
    return "SAFE"

# Running simulated execution checking variables constants
time.sleep(1)
scan_result = scan_incoming_request_node("Jacob_Alghamdi_Dev", "192.168.1.1")
print(f"System Operational Report Status: {scan_result}")
